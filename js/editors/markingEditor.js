class MarkingEditor{
    constructor(viewport, world, targetSegments)
    {
        this.viewport = viewport;
        this.world = world;

        this.canvas = viewport.canvas;
        this.targetSegments = targetSegments;
        this.ctx = this.canvas.getContext("2d");

        this.mouse = null;
        this.intent = null;

        this.markings = world.markings;
    }

    createMarking(center, dirVector)
    {
        return center;
    }

    enable()
    {
        this.#addEventListeners();
    }

    disable()
    {
        this.#removeEventListeners();
    }

    #addEventListeners()
    {
        this.boundedMouseDown = this.#handleMouseDown.bind(this);
        this.boundedMouseMove = this.#handleMouseMove.bind(this);
        this.boundedContextMenu = (evt)=> evt.preventDefault();
        this.canvas.addEventListener("mousedown", this.boundedMouseDown);
        this.canvas.addEventListener("mousemove", this.boundedMouseMove);
        this.canvas.addEventListener("contextmenu", this.boundedContextMenu);
    }

    #removeEventListeners()
    {
        this.canvas.removeEventListener("mousedown", this.boundedMouseDown);
        this.canvas.removeEventListener("mousemove", this.boundedMouseMove);
    }

    #handleMouseMove(evt)
    {
        this.mouse = this.viewport.getMouse(evt, true);
        const seg = getNearestSegment(this.mouse, this.targetSegments, 10 * this.viewport.zoom);
        if(seg)
        {
            const proj = seg.projectPoint(this.mouse);
            if(proj.offset >= 0 && proj.offset <= 1)
            {
                this.intent = this.createMarking(
                    proj.point,
                    seg.directionVector()
                );
            }
            else
            {
                this.intent = null;
            }
            // this.intent = seg;
        }
        else
        {
            this.intent = null;
        }
    }

    #handleMouseDown(evt)
    {
        if(evt.button == 0) //left click
        {
            if(this.intent)
            {
                this.markings.push(this.intent);
                this.intent = null;
            }
        }
        if(evt.button == 2) //right click
        {
            for(let i=0;i<this.markings.length;i++)
            {
                const poly = this.markings[i].poly;
                if(poly.containsPoint(this.mouse))
                {
                    this.markings.splice(i, 1);
                    return;
                }
            }
        }
    }

    display()
    {
        if(this.intent)
        {
            this.intent.draw(this.ctx);
        }
    }

    draw(ctx)
    {
        this.draw(ctx);
    }
}