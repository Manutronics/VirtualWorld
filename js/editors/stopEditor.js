class StopEditor extends MarkingEditor{
    constructor(viewport, world)
    {
        super(viewport, world, world.laneGuides);
    }

    createMarking(center, dirVector)
    {
        return new Stop(center, dirVector, world.roadWidth/2, world.roadWidth/2);
    }
}