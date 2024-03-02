class Crossing extends Marking{
    constructor(center, dirVector, width, height)
    {
        super(center, dirVector, width, height);
        this.borders = [this.poly.segments[0], this.poly.segments[2]];
    }

    draw(ctx)
    {
        const perp = perpendicular(this.dirVector);
        const line = new Segment(
            add(this.center, scale(perp, this.width/2)),
            add(this.center, scale(perp, -this.width/2))
        )
        line.draw(ctx, { color: 'white', width: this.height, dash: [11, 11] });
    }
}