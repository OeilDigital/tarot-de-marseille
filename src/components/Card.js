import React from 'react'
import '../App.css'
import { Draggable } from '@hello-pangea/dnd'

function Card({ card, index, updateDiscovery, langage }) {

    const addActive = (e) => {
        const thisCard = e.target
        const thisCardWrapper = thisCard.parentNode.parentNode
        const thisCardWrapperAttribute = thisCardWrapper.getAttribute('data-rfd-droppable-id');
        const backFace = thisCardWrapper.firstChild.lastChild
        thisCardWrapper.classList.add('active')
        // console.log(backFace)
        if (thisCardWrapperAttribute === 'initialDeck') {
            thisCard.style.background = './components/dos.png'
        } else {
            if (thisCardWrapper.classList.contains('active')) {
                // thisCardWrapper.style.aspectRatio = '1 / 1.6'
                // thisCardWrapper.style.height = 'auto'
                backFace.style.background = `url(${card.design})`
                backFace.style.backgroundSize = '97% 96.5%'
                backFace.style.backgroundPosition = "center center"
                backFace.style.backgroundRepeat = "no-repeat"
                backFace.style.margin = "1%"
                backFace.style.top = "-0.1%"
                updateDiscovery()
            } else {
                thisCard.style.background = './components/dos.png'

            }
        }
    }


    return (
        <Draggable draggableId={card.id}
            index={index}
            key={card.id}
        >
            {provided => (
                <div className="card_item"
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    {langage ?
                        (<div className="card-wrapper" title="Déplacez moi ou découvrez moi!" onClick={addActive}>
                            <div className="card">
                                <div className="card-front"></div>
                                <div className="card-back"></div>

                            </div>
                        </div>) :
                        (<div className="card-wrapper" title="Move me or uncover me!" onClick={addActive}>
                            <div className="card">
                                <div className="card-front"></div>
                                <div className="card-back"></div>

                            </div>
                        </div>)
                    }
                </div>
            )}
        </Draggable>
    )
}

export default Card