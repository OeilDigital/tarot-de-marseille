import React, { useState, useEffect } from 'react'
import Column from './Column'
import { DragDropContext } from '@hello-pangea/dnd'

function Deck({ data, updateMean, result, refreshMeanDraw, langage, changeLangage }) {

    const inheritedData = data
    const [datas, setDatas] = useState(inheritedData)
    const [fullDraw, setFullDraw] = useState(false)
    const [meanDraw, setMeanDraw] = useState([...result])
    const [discovery, setDiscovery] = useState(0)
    // const [langage, setLangage] = useState(false)

    function updateDiscovery() {
        setDiscovery(discovery + 1);
    }

    function handleClick() {
        window.location.reload();
    }

    useEffect(() => {
        function control(obj) {
            let full = []
            for (const el in obj.columns) {
                full = [...full, Array.from(obj.columns[el].taskIds)]
            }
            let fullcontrol = full.filter(i => i.length > 0)
            return fullcontrol
        }
        control(datas)
        if (control(datas).length === 5) {
            meanDraw.push(control(datas)[1], control(datas)[2], control(datas)[3], control(datas)[4])
            setMeanDraw(meanDraw)
            refreshMeanDraw(meanDraw)
            setFullDraw(true)
        }
    }, [datas, meanDraw])

    // useEffect(() => {
    //     function control(obj) {
    //         let full = []
    //         for (const el in obj.columns) {
    //             full = [...full, Array.from(obj.columns[el].taskIds)]
    //         }
    //         let fullcontrol = full.filter(i => i.length > 0)
    //         return fullcontrol
    //     }
    //     control(datas)
    //     if (control(datas).length === 5) {
    //         meanDraw.push(control(datas)[1], control(datas)[2], control(datas)[3], control(datas)[4])
    //         setMeanDraw(meanDraw)
    //         refreshMeanDraw(meanDraw)
    //         setFullDraw(true)
    //     }
    // }, [datas, meanDraw, refreshMeanDraw])


    const onDragEnd = (result) => {
        const { destination, source, draggableId } = result

        if (!destination) {
            return
        }

        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return
        }

        const start = datas.columns[source.droppableId]
        const finish = datas.columns[destination.droppableId]

        if (start === finish) {
            const column = datas.columns[source.droppableId]
            const newCardIds = Array.from(column.taskIds)

            newCardIds.splice(source.index, 1)
            newCardIds.splice(destination.index, 0, draggableId)


            //on crée une copie de la colonne de cartes modifiées
            const newColumn = {
                ...column,
                taskIds: newCardIds
            }

            //on met à jour le state
            const newState = {
                ...datas,
                columns: {
                    ...datas.columns,
                    [newColumn.id]: newColumn,
                }
            }
            setDatas(newState)
            return
        } else {
            const startCardIds = Array.from(start.taskIds)
            startCardIds.splice(source.index, 1)
            const newStart = {
                ...start,
                taskIds: startCardIds
            }

            const finishCardIds = Array.from(finish.taskIds)
            finishCardIds.splice(destination.index, 0, draggableId)
            const newFinish = {
                ...finish,
                taskIds: finishCardIds
            }

            const newState = {
                ...datas,
                columns: {
                    ...datas.columns,
                    [newStart.id]: newStart,
                    [newFinish.id]: newFinish,
                }
            }

            if (newFinish.taskIds.length > 1) {
                return;
            } else {
                setDatas(newState)
            }
        }

    }

    const toggleModaleInfo = ()=>{
        var element = document.getElementById("modalInfo");
        element.classList.toggle("showInfo");
      }



    return (
        <div className="deck">
            <DragDropContext onDragEnd={onDragEnd}>
                {datas.columnOrder.map(columnId => {
                    const column = datas.columns[columnId]
                    const cards = column.taskIds.map(taskId => datas.cards[taskId])
                    return <Column key={column.id} column={column} cards={cards} updateDiscovery={updateDiscovery} langage={langage} />
                })}
            </DragDropContext>

            <div className="divMean">
                <div className="langage">
                    <div className="flags">
                        {langage ?
                            (<img className="ukFlag" src={process.env.PUBLIC_URL + "/uk-small.png"} alt="uk flag" onClick={() => changeLangage(false)} />) :
                            (<img className="franceFlag" src={process.env.PUBLIC_URL + "/france-small.png"} alt="france flag" onClick={() => changeLangage(true)} />)
                        }
                    </div>
                </div>
                {(fullDraw && discovery > 3) ?
                    (langage ?
                        (<button className="btnMean" onClick={updateMean}><strong>Interprétation</strong></button>) :
                        (<button className="btnMean" onClick={updateMean}><strong>Meaning</strong></button>))
                    :
                    (langage ?
                        (<button className="btnMeanFalse" disabled ><strong>Interprétation</strong></button>) :
                        (<button className="btnMeanFalse" disabled ><strong>Meaning</strong></button>))
                }

                <div className="intro">
                    {langage ?
                        (<p className="textintro">
                            Choisissez 4 cartes parmis les Arcanes, placez les dans chacune des sections ci-dessous, puis, retournez les.
                        </p>) :
                        (<p className="textintroUK">Choose 4 cards from the Arcana, place them in each of the sections below, then turn them over.</p>)
                    }
                </div>
                {langage ?
                    (<button className="btnReboot" onClick={handleClick}><strong>Nouveau Tirage</strong></button>)
                    :
                    (<button className="btnReboot" onClick={handleClick}><strong>New Draw</strong></button>)
                }
                <div className="divInfoButton">
                    <img className="infoButton" src={process.env.PUBLIC_URL + "/information-button-white.png"} alt="Information" onClick={toggleModaleInfo}/>
                </div>
                <div className="modalInfoHide" id="modalInfo">
                    <div className="tuto">
                        <div className="img"><img src={process.env.PUBLIC_URL + "/drag'n drop.png"} alt="icon drag'n drop" />
                        {langage ?
                            (<span>
                            Maintenez votre doigt appuyé sur l'arcane de votre choix tout en le déplaçant
                            </span>) :
                            (<span>
                            Keep your finger pressed on the arcana of your choice while moving it
                            </span>)
                        }
                        </div>
                        <hr/>
                        <div className="img"><img src={process.env.PUBLIC_URL + "/click.png"} alt="icon clic" />
                        {langage ?
                            (<span>Clicker dessus pour le retourner</span>)
                            :
                            (<span>Click on it to return it</span>)
                        }
                        </div></div>
                        {langage ?
                        (<p>Pour tous renseignements, veuillez nous contacter par mail à oeildigital@yahoo.fr</p>)
                        :
                        (<p>For any information, please contact us by email at oeildigital@yahoo.fr</p>)
                        }
                    </div>
            </div>
        </div>
    )
}

export default Deck