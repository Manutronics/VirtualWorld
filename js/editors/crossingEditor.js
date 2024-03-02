class CrossingEditor extends MarkingEditor{
    constructor(viewport, world)
    {
        super(viewport, world, world.graph.segments);
    }

    createMarking(center, dirVector)
    {
        return new Crossing(center, dirVector, world.roadWidth, world.roadWidth/2);
    }      
}