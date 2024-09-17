import '../App.css';
import initialData from '../config/datas'

export default function MeanModal(result, langage) {
    // const [classMeanModalClassName, setMeanModalClassName] = useState("modal");
    function hideMeanModal() {
        const modal = document.querySelector('#mean-details-modal')
        modal.classList.add("hide")
        // ----- Ouverture de Modale Publicitaire ----
        // const admodal = document.querySelector('.adModal')
        // admodal.classList.add("show")
        // -----Fin * Ouverture de Modale Publicitaire ----
        //----- !!!!! Surbrillance du Bouton Reboot à retirer quand mise en place de AdModal !!!!----//
        const btnreboot = document.querySelector('.btnReboot')
        btnreboot.classList.add("surprint")
        //----- !!!!! Fin de Surbrillance du Bouton Reboot à retirer ......   !!!!----//
    }
    /* Fonction de Fermeture de Modale Publicitaire */
    function hideAdModal() {
        const admodal = document.querySelector('.adModal')
        admodal.classList.add("hide")
        const btnreboot = document.querySelector('.btnReboot')
        btnreboot.classList.add("surprint")
    }
    /* Fin de Fonction de Fermeture de Modale Publicitaire */

    let resultMeanArray = Object.keys(result).map(function (cle) {
        return [Number(cle), result[cle]];
    });

    let resultMeanResponse = resultMeanArray[0][1]



    // Début de code pour récupérer les symboles, parse leurs chemins et ajout dans chaque obj de allArcanes



    const allArcanes = {
        "arc1": {
            "init": "L'arcane du Bateleur en situation initiale indique un nouveau départ, un potentiel créatif et des opportunités.",
            "opp": "Le Bateleur en opposition évoque un manque de dynamisme, et de la confusion. Il se peut que vous soyez confronté à de la manipulation, de la ruse, voir de la malhonnêteté. La confusion existe dans une situation.",
            "atout": "Le Bateleur indique que vous possédez des compétences et des talents. Dans la situation qui vous préoccupe, votre créativité, votre enthousiasme et votre habileté sont des atouts précieux.",
            "result": "Vous prenez ou allez prendre des initiatives concrètes. La réalisation de vos projets va prendre un nouvel essor avec des résultats visibles."
        },
        "arc2": {
            "init": "La Papesse en position initiale indique une période durant laquelle votre intuition est accrue. C'est une période propice à la spiritualité, et au développement personnel. Vous pouvez compter sur votre sagesse intérieure.",
            "opp": "En opposition, la Papesse évoque les secrets, les mystères, parfois la dissimulation dans une situation.",
            "atout": "La Papesse en atout vous invite à étudier la situation. Elle vous invite à prendre du recul et à acquérir de nouvelles connaissances, avec patience et humilité. Ce peut être également une période favorable pour reprendre des études, acquérir de nouvelles connaissances et compétences.",
            "result": "Vous allez développer une écoute intérieure et une compréhension profonde quant à ce qui vous préoccupe. Attendez vous à ce que des secrets vous soient révélés."
        },
        "arc3": {
            "init": "L' Impératrice en position initiale indique une période d'abondance durant laquelle créativité, sensibilité, et succès sont à l'honneur.",
            "opp": "L'arcane de l' Impératrice en opposition évoque la dépendance et l'inaction. Une situation est déséquilibrée ou stagnante.",
            "atout": "Avec l' Impératrice, votre réceptivité et votre abnégation sont vos atouts. Vous parvenez à équilibrer vos émotions dans la situation qui vous préoccupe. C'est une période féconde au sens propre et figurée.",
            "result": "Vous allez connaître d'ici peu une période de croissance, d'expansion et voir vos souhaits se réaliser."
        },
        "arc4": {
            "init": "L' Empereur en position initiale est signe d'autorité, de structure, de stabilité et de protection dans une situation.",
            "opp": "En opposition l' Empereur indique une forme d'autoritarisme, de tyrannie dans une situation. Un contrôle excessif est néfaste à l'évolution de ce qui vous interroge.",
            "atout": "L' Empereur en atout évoque la force, le leadership, l'organisation, et le contrôle. Votre détermination et votre maîtrise sont des ressources précieuses dans la situation ou la période que vous traversez.",
            "result": "Le succès et l'accomplissement sont au rendez-vous, et vous allez retrouver protection et sécurité dans la situation qui vous préoccupe."
        },
        "arc5": {
            "init": "L'arcane du Pape en position initiale est le signe, qu'actuellement, les traditions, l'éducation, la spiritualité sont au premier plan dans votre vie.",
            "opp": "Le Pape en opposition évoque une attitude dogmatique et rigide. Le conformisme est contre-productif dans une situation. Il se peut que vous refusiez d'offrir votre aide , ou qu'à l'inverse, on refuse de vous l'offrir.",
            "atout": "Le Pape en atout évoque la sagesse, l'enseignement, les conseils et la spiritualité. Vous gagnerez à prendre du recul et à changer de regard quant à la situation qui vous préoccupe.",
            "result": "Vous allez atteindre vos objectifs et la situation qui vous interroge va connaître une évolution positive. Il se peut également que le chemin parcouru pendant la période que vous traversez vous amène à franchir un palier dans votre spiritualité."
        },
        "arc6": {
            "init": "L'Amoureux en position initiale indique un choix à faire, une dualité dans une relation ou une situation. Une décision importante est à prendre.",
            "opp": "L'arcane de l'Amoureux en opposition évoque un déséquilibre, un conflit intérieur ou un choix difficile.",
            "atout": "L'Amoureux en atout évoque l'union, l'harmonie, et les décisions éclairées. Vous faites de bons choix dans une situation, ou la période est propice à la stabilité et aux relations épanouissantes.",
            "result": "Les choix que vous ferez ou avez déjà fait sont favorables à la réalisation de votre projet, et vous allez retrouver l'harmonie et l'équilibre dans la situation qui vous préoccupe."
        },
        "arc7": {
            "init": "Le Chariot en position initiale symbolise l'action, la volonté, la progression, et la maîtrise de soi.",
            "opp": "En opposition, le Chariot indique une période de stagnation, des obstacles et un manque de contrôle dans une situation qui tendent à ralentir son évolution.",
            "atout": "Le Chariot indique une grande détermination, ainsi que l'avancement et le succés dans une situation. Votre motivation et votre force mentale sont vos meilleurs atouts dans la réussite de vos projets.",
            "result": "Vous allez connaître un dénouement heureux et un succés rapide dans la situation qui vous préoccupe. Vous pouvez avoir confiance en l'avenir. Si des déplacements sont prévus, ils sont placés sous de bons auspices. Sous peu, vous allez connaître la victoire et la réussite dans un projet."
        },
        "arc8": {
            "init": "La Justice en position initiale, est signe d'équilibre, de vérité, de justice, et de loi karmique.",
            "opp": "L'arcane de la Justice en opposition indique une injustice, un déséquilibre, ou un jugement hâtif.",
            "atout": "La Justice en atout est gage d'équité, d'honnêteté, de justesse dans vos prise de décisions. Vous récoltez ce que vous avez semé.",
            "result": "Vous allez récolter les fruits de votre travail et de vos efforts, de façon juste et équitable."
        },
        "arc9": {
            "init": "L'Hermite en position initiale indique une période de solitude, d'introspection et de recherche de vérité.",
            "opp": "L'Hermite en opposition évoque une forme d'isolement, de retrait, dans certains cas de dépression.",
            "atout": "L'Hermite évoque la sagesse, la guidance intérieure et une quête de sens qui aboutit. Face aux incertitudes, vous continuez d'avancer en confiance, et ce cheminement bénéfique participe de et à votre bien-être.",
            "result": "Il se pourrait que les résultats attendus ou ce que vous souhaitez tarde à arriver. Pour autant, faites le point, et continuez sans relâche de produire des efforts et de croire en l'avenir. Votre patience et votre détermination finiront par 'payer'."
        },
        "arc10": {
            "init": "La Roue de la Fortune en position initiale est signe de changements, de cycles, de destinée, mais également d'opportunités.",
            "opp": "L'arcane de la Roue de la Fortune en opposition évoque une période de stagnation, ou de résistance au changement.",
            "atout": "La Roue de la Fortune en atout, vous indique une période de chance à venir. De nouvelles opportunités vont s'offrir à vous, et votre situation devrait connaître un tournant favorable.",
            "result": "Les événements vont s'accélérer et vous allez, sous peu, débuter un nouveau cycle. Il en va ainsi de toutes choses, une nouvelle période s'offre à vous."
        },
        "arc11": {
            "init": "L'arcane de la Force en position initiale est signe de force intérieure, de courage et de maîtrise de soi dans une situation.",
            "opp": "La Force en opposition indique une forme de fébrilité, un manque de contrôle, ou une impulsivité néfaste à l'avancement d'un projet ou dans une relation.",
            "atout": "La Force en atout évoque la force, le courage, la maîtrise des instincts et la compassion. Votre détermination et votre maitrise dans la situation actuelle sont des atouts certain pour faire évoluer les choses dans le bon sens.",
            "result": "Vous allez connaître une réussite et un succès éclatant dans la situation qui vous préoccupe. De façon générale, la période est propice au dépassement des obstacles, et les satisfactions et plaisirs, nombreux. Vous cheminez avec beaucoup de sang-froid et de maîtrise."
        },
        "arc12": {
            "init": "Le Pendu en position initiale indique une pause dans une situation, une période de lâcher-prise, mais également un nouveau regard sur une situation.",
            "opp": "Le Pendu en opposition indique un blocage, une résistance, voir un sacrifice inutile.",
            "atout": "Le Pendu en atout indique que un lâcher-prise, l'acceptation de la situation, est un regard neuf sur ce qui vous préoccupe.",
            "result": "Rien ne garantit un aboutissement favorable sur un plan matériel. Il se peut que les résultats souhaités tardent ou que vous soyez amenés à renoncer. Pour autant, si tel est le cas, faites un pas de coté, et observer tout le chemin parcouru. Quoiqu'il advienne, vous ressortez grandi(e) de cette expérience."
        },
        "arc13": {
            "init": "L'Arcane sans Nom en position initiale indique la fin d'une situation ou d'une période. Mais cette fin choisie ou subie est également source de transformation, de renouveau et de changements.",
            "opp": "L'Arcane sans Nom en opposition évoque la fin subie d'une situation, une fin de cycle difficile, dans certains cas le deuil d'une relation ou d'un être.",
            "atout": "L'Arcane sans Nom en atout indique une transformation salutaire, le renouveau dans une situation, une libération, un changement bénéfique.",
            "result": "Votre situation va connaître une transformation profonde et radicale. Quoiqu'il advienne, dans le contexte qui vous intérroge, rien de sera plus comme avant."
        },
        "arc14": {
            "init": "L'arcane de la Tempérance en position initiale est signe d'équilibre, de modération, d'harmonie dans une situation. Tempérance évoque également une période de guérison.",
            "opp": "La Tempérance en opposition évoque le déséquilibre, les excès, un manque de modération dans une situation ou dans une relation.",
            "atout": "La Tempérance en atout évoque l'harmonie, l'équilibre dans une situation, et la patience. Si ce qui vous préoccupe est en rapport avec la santé, une rémission et dans certains cas une guérison sont possibles. Dans tous les cas on vous invite à la pondération.",
            "result": "Vous allez retrouver harmonie, modération, et équilibre. Une période plus douce est plus tempérée arrive à vous prochainement."
        },
        "arc15": {
            "init": "Le Diable en position initiale est signe d'attachement, de tentations, d'illusions dans une situation mais également de  désirs matériels.",
            "opp": "L'arcane du Diable en opposition indique une libération, le détachement dans une situation ou une relation. Dans certains cas, des vérités sont révélées.",
            "atout": "Le Diable en atout évoque des attachements malsains, des illusions et des tentations.",
            "result": "Vous allez finir par vous libérer de vos chaînes, et connaître une véritable transformation, y compris dans vos désirs."
        },
        "arc16": {
            "init": "La Maison Dieu en position initiale indique des changements soudains, une révélation dans une situation, voir des épreuves, ou une situation chaotique.",
            "opp": "L'arcane de la Maison Dieu en opposition évoque un désastre évité de justesse.",
            "atout": "La Maison Dieu en atout est le signe d'une révélation et/ou d'une libération. Cette arcane vous indique que l'épreuve que vous travers est nécessaire. Vous en sortirez grandi.",
            "result": "Vous vous acheminez vers une transformation radicale, et une totale libération. Il y aura un avant et un après la période que vous traversez, et de nouvelles perspectives vont faire jour."
        },
        "arc17": {
            "init": "L'Etoile en position initiale invite à l'espoir dans une situation. La période actuelle est propice à l'inspiration, à la guérison et au renouveau.",
            "opp": "L'Etoile, quant à elle, en opposition, représente l'abattement, le manque de foi et les blocages émotionnels.",
            "atout": "L'arcane de l'Etoile en atout que vous pouvez garder espoir et avoir foi en l'avenir. Vous êtes guidé(e), croyez en vos inspirations.",
            "result": "Renouveau, inspiration, et foi restaurée. Croyez en l'avenir, l'avenir croit en vous."
        },
        "arc18": {
            "init": "La Lune en position initiale indique une période ou une situation proprice aux illusions, aux peurs, à une forte emotivité mais également à l'imagination. Dans certains cas elle indique qu'actuellement vous avez une intuition profonde.",
            "opp": "La Lune en opposition indique de la confusion dans une situation, des peurs irrationnelles et des illusions.",
            "atout": "L'arcane de la Lune en atout évoques le fait que vous pouvez avoir de fortes intuitions actuellement, y compris en rêves. Des mystères vont bienôt vous être révélés, si ce n'est déjà le cas. Vous pouvez également connaître une profofonde transformation émotionnelle.",
            "result": "La Lune, apporte un éclaircissement à des illusions, une intuition renforcée, et une clarté émotionnelle. Faites vous confiance."
        },
        "arc19": {
            "init": "Le Soleil en position initiale est signe de joie, de succès, de bonheur et de vitalité. Vous connaissez actuellement une période radieuse.",
            "opp": "L'arcane du Soleil en opposition évoque le pessimisme, un manque de vitalité, ou des échecs répétés. Vous avez tendance à vous laisser envahir par vos doutes.",
            "atout": "Le Soleil en atout indique le succès, l'énergie, et l'accomplissement. Vous rayonnez.",
            "result": "Succès éclatant et vitalité retrouvée. Vous allez briller de milles feux."
        },
        "arc20": {
            "init": "L'arcane du Jugement en position initiale indique une révélation dans une situation, une période d'appel à l'action, le rendu d'un jugement.",
            "opp": "Le Jugement en opposition évoque l'ignorance, le manque de réflexion et la procrastination.",
            "atout": "L'arcane du Jugement en atout indique le renouveau, la révélation et la prise de conscience. Vous faites, ou allez faire l'objet des récompenses méritées.",
            "result": "Vous allez connaître un réveil spirituel. Justice vous sera rendu. Les efforts que vous avez fournis ces derniers temps n'ont pas été vains. Loin d'être passé inaperçus, l'heure de la récolte va bientôt sonner."
        },
        "arc21": {
            "init": "Le Monde en position initiale est l'arcane de l'accomplissement, de l'achèvement, de l'aboutissement. Vous connaissez une période de succés.",
            "opp": "L'arcane du Monde en opposition est signe d'un projet inachevé ou avorté, d'une période de stagnation, ou d'une situation qui n'aboutit pas.",
            "atout": "Le Monde en atout est le signe de l'harmonie, de l'achèvement et de l'accomplissement des buts. L'Univers conspire à votre succès, n'en doutez pas!",
            "result": "La réalisation des vos rêves est toute proche. Dans un total accomplissement, ce que vous espérer tant est tout proche de se réaliser. Gardez foi, l'harmonie et le bonheur sont tout proches."
        },
        "arc22": {
            "init": "Le Mat en position initiale indique une période où vous vous sentez libre. C'est l'arcane de l'innocence, mais aussi du voyage spirituel.",
            "opp": "Le Mat en opposition évoque la folie, l'imprudence et le manque de préparation dans une situation.",
            "atout": "L'arcane du Mat en atout évoque la liberté intérieure, un voyage spirituel, et la confiance en l'avenir. Votre bien-être est votre meilleur atout !",
            "result": "Le temps est venu pour un nouveau départ. Qu'il s'agisse d'une quête spirituelle, professionnelle ou sentimentale, vous avancerez très bientôt en toute confiance vers de nouveaux horizons."
        }
    }

    const allArcanesUK = {
        "arc1": {
            "init": "The Magician arcana in the initial position indicates a new beginning, creative potential and opportunities.",
            "opp": "The Magician in opposition suggests a lack of dynamism and confusion. You might be facing manipulation, cunning, or even dishonesty. There is confusion within a situation.",
            "atout": "The Magician indicates that you possess skills and talents. In the situation that concerns you, your creativity, enthusiasm, and skill are valuable assets.",
            "result": "You are taking or will take concrete initiatives.The realization of your projects will gain new momentum with visible results."
        },
        "arc2": {
            "init": "The High Priestess in the initial position indicates a period during which your intuition is heightened. This is a favorable time for spirituality and personal development. You can rely on your inner wisdom.",
            "opp": "In opposition, the High Priestess evokes secrets, mysteries, sometimes concealment within a situation.",
            "atout": "The High Priestess as an asset invites you to study the situation. She encourages you to step back and acquire new knowledge with patience and humility. It may also be a favorable time to resume studies, acquire new knowledge, and skills.",
            "result": "You will develop inner listening and a deep understanding of what concerns you. Expect secrets to be revealed to you."
        },
        "arc3": {
            "init": "The Empress in the initial position indicates a period of abundance during which creativity, sensitivity, and success are in the spotlight.",
            "opp": "The arcana of the Empress in opposition evokes dependence and inaction. A situation is unbalanced or stagnant.",
            "atout": "With the Empress arcana, your receptivity and selflessness are your strengths. You manage to balance your emotions in the situation that concerns you. It's a fruitful period in both the literal and figurative sense.",
            "result": "You will soon experience a period of growth, expansion and see your wishes come true."
        },
        "arc4": {
            "init": "The Emperor in the initial position is a sign of authority, structure, stability and protection in a situation.",
            "opp": "In opposition, the Emperor indicates a form of authoritarianism, of tyranny in a situation. Excessive control is harmful to the evolution of what concerns you.",
            "atout": "The Emperor as a strength card evokes power, leadership, organization, and control. Your determination and mastery are valuable resources in the situation or period you are going through.",
            "result": "Success and accomplishment await you, and you will regain protection and security in the situation that concerns you."
        },
        "arc5": {
            "init": "The Pope card in the initial position is the sign that currently, traditions, education, spirituality are at the forefront in your life.",
            "opp": "In opposition, the Pope evokes a dogmatic and rigid attitude. Conformism is counterproductive in a situation. You may refuse to offer your help, or conversely, it may be refused to you.",
            "atout": "The Pope as an asset evokes wisdom, teaching, advice and spirituality. You will benefit from taking a step back and changing your perspective on the situation that concerns you.",
            "result": "You will achieve your goals, and the situation you're questioning will experience a positive evolution. It's also possible that the journey you've taken during this period will lead you to reach a new level in your spirituality."
        },
        "arc6": {
            "init": "The Lover in the initial position indicates a choice to make, a duality in a relationship or a situation. An important decision has to be made.",
            "opp": "The arcana of the Lover in opposition evokes an imbalance, an inner conflict or a difficult choice.",
            "atout": "The Lover's trump card evokes union, harmony, and informed decisions. You make good choices in a situation, where the period is conducive to stability and fulfilling relationships.",
            "result": "The choices you will make or have already made are favorable to the realization of your project, and you will find harmony and balance in the situation that concerns you."
        },
        "arc7": {
            "init": "The Chariot in its initial position symbolizes action, will, progression, and self-control.",
            "opp": "In opposition, the Chariot indicates a period of stagnation, obstacles and a lack of control in a situation which tend to slow down its evolution.",
            "atout": "The Chariot indicates great determination, as well as advancement and success in a situation. Your motivation and mental strength are your best assets in the success of your projects.",
            "result": "You will experience a happy outcome and rapid success in the situation that concerns you. You can have confidence in the future. If trips are planned, they are placed under good auspices. Soon, you will experience victory and success in a project."
        },
        "arc8": {
            "init": "Justice in the initial position is a sign of balance, truth, justice, and karmic law.",
            "opp": "The arcana of Justice in opposition indicates injustice, imbalance, or hasty judgment.",
            "atout": "Justice as an asset is a guarantee of fairness, honesty and accuracy in your decision-making. You reap what you sow.",
            "result": "You will reap fruits of your work and your efforts, in a fair and equitable manner."
        },
        "arc9": {
            "init": "The Hermit in the initial position indicates a period of solitude, introspection and search for truth.",
            "opp": "The Hermit in opposition evokes a form of isolation, withdrawal, in certain cases depression.",
            "atout": "The Hermit evokes wisdom, inner guidance and a successful quest for meaning. Faced with uncertainties, you continue to move forward with confidence, and this beneficial path contributes to and to your well-being.",
            "result": "The expected results or what you want may be slow to arrive. However, take stock, and tirelessly continue to make efforts and believe in the future. Your patience and determination will eventually 'pay off'."
        },
        "arc10": {
            "init": "The Wheel of Fortune in its initial position is a sign of changes, cycles, destiny, but also opportunities.",
            "opp": "The Wheel of Fortune arcana in opposition evokes a period of stagnation, or resistance to change.",
            "atout": "The Wheel of Fortune as an asset indicates a period of luck to come. New opportunities will become available to you, and your situation should experience a favorable turnaround.",
            "result": "Events will accelerate and you will soon begin a new cycle. This is the way it is with all things, a new period is coming to you."
        },
        "arc11": {
            "init": "The arcana of Strength in the initial position is a sign of inner strength, courage and self-control in a situation.",
            "opp": "The Force in opposition indicates a form of restlessness, a lack of control, or impulsiveness that is harmful to the advancement of a project or in a relationship.",
            "atout": "The Strength asset evokes strength, courage, mastery of instincts and compassion. Your determination and your mastery in the current situation are certain assets to move things in the right direction.",
            "result": "You will experience success and resounding success in the situation that concerns you. Generally speaking, the period is conducive to overcoming obstacles, and there are numerous satisfactions and pleasures. You walk with great composure and control."
        },
        "arc12": {
            "init": "The Hanged Man in the initial position indicates a pause in a situation, a period of letting go, but also a new look at a situation.",
            "opp": "The Hanged Man in opposition indicates a blockage, a resistance, or even a useless sacrifice.",
            "atout": "The Hanged Man as an asset indicates letting go, acceptance of the situation, it is a new look at what worries you.",
            "result": "Nothing guarantees a favorable outcome on a material level. The desired results may be delayed or you may have to give up. However, if this is the case, take a step aside and observe how far you have come. Whatever happens, you emerge from this experience grown."
        },
        "arc13": {
            "init": "The Nameless Arcana in the initial position indicates the end of a situation or period. But this chosen or endured end is also a source of transformation, renewal and change.",
            "opp": "The Nameless Arcana in opposition evokes the end of a situation, a difficult end of a cycle, in certain cases the mourning of a relationship or a being.",
            "atout": "The Nameless Arcana as an asset indicates a salutary transformation, renewal in a situation, a liberation, a beneficial change.",
            "result": "Your situation will experience a profound and radical transformation. Whatever happens, in the context that concerns you, nothing will be the same again."
        },
        "arc14": {
            "init": "The arcana of Temperance in the initial position is a sign of balance, moderation, and harmony in a situation. Temperance also connotes a period of healing.",
            "opp": "Temperance in opposition evokes imbalance, excess, a lack of moderation in a situation or in a relationship.",
            "atout": "Temperance as an asset evokes harmony, balance in a situation, and patience. If what concerns you is health-related, remission and in some cases recovery are possible. In all cases we invite you to weigh.",
            "result": "You will find harmony, moderation, and balance. A milder and more temperate period is coming to you soon."
        },
        "arc15": {
            "init": "The Devil in the initial position is a sign of attachment, temptations, illusions in a situation but also material desires.",
            "opp": "The Devil's arcana in opposition indicates liberation, detachment in a situation or a relationship. In some cases, truths are revealed.",
            "atout": "The Devil as asset evokes unhealthy attachments, illusions and temptations.",
            "result": "You will end up freeing yourself from your chains, and experiencing a real transformation, including in your desires."
        },
        "arc16": {
            "init": "The House of God in the initial position indicates sudden changes, a revelation in a situation, seeing trials, or a chaotic situation.",
            "opp": "The arcana of the House of God in opposition evokes a disaster narrowly avoided.",
            "atout": "The House of God as an asset is the sign of a revelation and/or a liberation. This arcana tells you that the ordeal you are going through is necessary. You will come out of it grown.",
            "result": "You are moving towards a radical transformation, and total liberation. There will be a before and an after of the period you are going through, and new perspectives will emerge."
        },
        "arc17": {
            "init": "The Star in the initial position invites hope in a situation. The current time is ripe for inspiration, healing and renewal.",
            "opp": "The Star, for its part, in opposition, represents despondency, lack of faith and emotional blockages.",
            "atout": "The arcana of the Star as an asset is a sign that you can keep hope and have faith in the future. You are guided, believe in your inspirations.",
            "result": "Renewal, inspiration, and restored faith. Believe in the future, the future believes in you."
        },
        "arc18": {
            "init": "The Moon in the initial position indicates a period or a situation conducive to illusions, fears, strong emotion but also imagination. In some cases it indicates that you currently have a deep intuition.",
            "opp": "The Moon in opposition indicates confusion in a situation, irrational fears and illusions.",
            "atout": "The arcana of the Moon as an asset evokes the fact that you can have strong intuitions currently, including in dreams. Mysteries will soon be revealed to you, if they haven't already. You may also experience a profound emotional transformation.",
            "result": "The Moon brings clarification to illusions, strengthened intuition, and emotional clarity. Trust yourself."
        },
        "arc19": {
            "init": "The Sun in the initial position is a sign of joy, success, happiness and vitality. You are currently experiencing a radiant period.",
            "opp": "The arcana of the Sun in opposition evokes pessimism, a lack of vitality, or repeated failures. You tend to let yourself be overcome by your doubts.",
            "atout": "The Sun as an asset indicates success, energy, and accomplishment. You shine.",
            "result": "Brilliant success and renewed vitality. You will shine brightly."
        },
        "arc20": {
            "init": "The arcana of Judgment in the initial position indicates a revelation in a situation, a period of call to action, the rendering of a judgment.",
            "opp": "Judgment as opposition speaks of ignorance, lack of thought and procrastination.",
            "atout": "The Arcana of Judgment as an asset indicates renewal, revelation and awareness. You are, or will be, the subject of deserved rewards.",
            "result": "You will experience a spiritual awakening. Justice will be done to you. The efforts you have made recently have not been in vain. Far from going unnoticed, harvest time will soon come."
        },
        "arc21": {
            "init": "The World in its initial position is the arcana of accomplishment, of completion, of outcome. You are experiencing a period of success.",
            "opp": "The arcana of the World in opposition is a sign of an unfinished or aborted project, of a period of stagnation, or of a situation which does not succeed.",
            "atout": "The World as an asset is the sign of harmony, completion and accomplishment of goals. The Universe conspires to your success, don't doubt it!",
            "result": "The realization of your dreams is very close. In total accomplishment, what you hope for so much is very close to coming true. Keep faith, harmony and happiness are just around the corner."
        },
        "arc22": {
            "init": "The Mat arcana in the initial position indicates a period when you feel free. It is the arcana of innocence, but also of the spiritual journey.",
            "opp": "Mat in opposition evokes madness, recklessness and lack of preparation in a situation.",
            "atout": "The Mat arcana as an asset evokes inner freedom, a spiritual journey, and confidence in the future. Your well-being is your best asset!",
            "result": "The time has come for a new beginning. Whether it is a spiritual, professional or sentimental quest, you will very soon move forward with complete confidence towards new horizons."
        }
    }


    let arcaneOneofAllArcanes = resultMeanResponse[0][0][0]
    let arcaneTwoofAllArcanes = resultMeanResponse[0][1][0]
    let arcaneThreeofAllArcanes = resultMeanResponse[0][2][0]
    let arcaneFourofAllArcanes = resultMeanResponse[0][3][0]


    let init = allArcanes[arcaneOneofAllArcanes].init

    let opp = allArcanes[arcaneTwoofAllArcanes].opp

    let atout = allArcanes[arcaneThreeofAllArcanes].atout

    let resultat = allArcanes[arcaneFourofAllArcanes].result

    let initUK = allArcanesUK[arcaneOneofAllArcanes].init

    let oppUK = allArcanesUK[arcaneTwoofAllArcanes].opp

    let atoutUK = allArcanesUK[arcaneThreeofAllArcanes].atout

    let resultatUK = allArcanesUK[arcaneFourofAllArcanes].result


    const initialDataArray = Object.keys(initialData.cards).map(function (cle) {
        return [Number(cle), initialData.cards[cle]];
    });

    let symbolArray = []

    initialDataArray.forEach((el) => symbolArray.push(el[1]))

    // const symbolOne = initialData.cards.filter((t) => t.id === arcaneOneofAllArcanes)


    const arcaneOne = symbolArray.filter((t) => t.id === arcaneOneofAllArcanes)
    const arcaneOneSymbole = process.env.PUBLIC_URL + "/" + arcaneOne[0].arcane

    const arcaneTwo = symbolArray.filter((t) => t.id === arcaneTwoofAllArcanes)
    const arcaneTwoSymbole = process.env.PUBLIC_URL + "/" + arcaneTwo[0].arcane

    const arcaneThree = symbolArray.filter((t) => t.id === arcaneThreeofAllArcanes)
    const arcaneThreeSymbole = process.env.PUBLIC_URL + "/" + arcaneThree[0].arcane

    const arcaneFour = symbolArray.filter((t) => t.id === arcaneFourofAllArcanes)
    const arcaneFourSymbole = process.env.PUBLIC_URL + "/" + arcaneFour[0].arcane


    const minMeanModal = () =>{
        const bodymodal = document.querySelector("#modal-body")
        bodymodal.classList.toggle("maskorshowmodalbody")
        const meanDetailsModal = document.querySelector("#mean-details-modal")
        meanDetailsModal.classList.toggle("reduceModale")
    }

    const flip = () => {
            const spinContainer = document.querySelector('#spin-container');
            spinContainer.classList.toggle('active');
    }


    // console.log(arcaneOneSymbole, arcaneTwoSymbole, arcaneThreeSymbole, arcaneFourSymbole)


    return (
        <>
            <div id="mean-details-modal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content" id="modal-content">
                        <div className="modal-header">
                            {result.langage ?
                                (< p className="modal-title"><strong>Interprétation</strong></p>) :
                                (< p className="modal-title"><strong>Interpretation</strong></p>)
                            }
                            <div className="modalButtons">
                            <button id="btnminmax" onClick={flip}>
                                <div id="spin-container" title="Click on me!">
                                    <div className="front" onClick={minMeanModal}>
                                        {/* <div className="btn-min"> */}
                                        <img className="btn-min-icon" src={process.env.PUBLIC_URL + "/min-button-meanmodale-blue.png"} alt="Minification de modale" />
                                    {/* </div> */}
                                        </div>
                                    <div className="back" onClick={minMeanModal}>
                                        {/* <div className="btn-max"> */}
                                        <img className="btn-max-icon" src={process.env.PUBLIC_URL + "/max-button-meanmodale-blue3.png"} alt="Affichage integral de modale" />
                                        {/* </div> */}
                                    </div>
                                </div>
                            </button>
                            <button
                                type="button"
                                className="btn-close"
                                onClick={hideMeanModal}
                            ><img className="btn-close-icon" src={process.env.PUBLIC_URL + "/closeButton.png"} alt="Fermer de modale" /></button>
                            </div>

                        </div>
                        <div className="modal-body" id="modal-body">
                            <div className="competence">
                                {result.langage ?
                                    (<p className="mean">{init}</p>) :
                                    (<p className="mean">{initUK}</p>)
                                }
                                <div>
                                    <img className="symbol symbolOne" src={arcaneOneSymbole} alt="Symbole de l'arcane en position initiale" />
                                </div>
                                {result.langage ?
                                    (<p className="mean">{opp}</p>) :
                                    (<p className="mean">{oppUK}</p>)
                                }
                                <div>
                                    <img className="symbol symbolTwo" src={arcaneTwoSymbole} alt="Symbole de l'arcane en opposition" />
                                </div>
                                {result.langage ?
                                    (<p className="mean">{atout}</p>) :
                                    (<p className="mean">{atoutUK}</p>)
                                }
                                <div>
                                    <img className="symbol symbolThree" src={arcaneThreeSymbole} alt="Symbole de l'arcane en atout" />
                                </div>
                                {result.langage ?
                                    (<p className="mean"><strong><span style={{ fontWeight: 900, textDecoration: "underline", fontSize: "1.75rem", textUnderlineOffset: "4px" }}>Résultante</span></strong>: {resultat}</p>) :
                                    (<p className="mean"><strong><span style={{ fontWeight: 900, textDecoration: "underline", fontSize: "1.75rem", textUnderlineOffset: "4px" }}>Resulting</span></strong>: {resultatUK}</p>)
                                }
                                <div>
                                    <img className="symbol symbolFour" src={arcaneFourSymbole} alt="Symbole de l'arcane en résultante" />
                                </div>
                                <br />
                                <br />
                                <div className="paypalButton">
                                    {/* <p className="callToDonationText">Vous pouvez soutenir cette application en faisant un don. Namaste.</p> */}
                                    {result.langage ?
                                        (<p className="callToDonationText animated jello">Si cette application vous plait, partagez la.<br /> Namaste</p>) :
                                        (<p className="callToDonationText animated jello">If you like this application, share it.<br /> Namaste</p>)
                                    }
                                    {/* <br />
                                <form action="https://www.paypal.com/donate" method="post" target="_top">
                                    <input type="hidden" name="business" value="SHJ9R69PDB37S" />
                                    <input type="hidden" name="no_recurring" value="0" />
                                    <input type="hidden" name="item_name" value="Pour soutenir notre application Tarot de Marseille vous pouvez faire un don du montant de votre choix. Merci." />
                                    <input type="hidden" name="currency_code" value="EUR" />
                                    <input type="image" src="https://www.paypalobjects.com/fr_FR/FR/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Bouton Faites un don avec PayPal" />
                                    <img alt="" border="0" src="https://www.paypal.com/fr_FR/i/scr/pixel.gif" width="1" height="1" />
                                </form> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            {/* -------------Modale Publicitaire----------------- */}
            <div className="adModal">
                <button
                    type="button"
                    className="btn-closeAdModal"
                    onClick={hideAdModal}
                >
                    {/* <strong>X</strong></button> */}
                    <img className="btn-close-icon" src={process.env.PUBLIC_URL + "/closeButton.png"} alt="Fermer de modale" /></button>
            </div>
            {/* ------------- Fin de Modale Publicitaire----------------- */}
            <div className="blurbg"></div>
        </>
    )
}