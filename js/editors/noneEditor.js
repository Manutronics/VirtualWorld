class NoneEditor extends MarkingEditor{
    constructor(viewport, world)
    {
        super(viewport, world, world.laneGuides);
        this.enabled = false;
    }

    enable()
    {
        this.enabled = true;
    }

    disable()
    {
        this.enabled = false;
    }

    isEnabled()
    {
        return this.enabled;
    }

    #addEventListeners()
    {
    }

    #removeEventListeners()
    {
    }

    #handleMouseMove(evt)
    {
    }

    #handleMouseDown(evt)
    {
    }

    display()
    {
    }
}