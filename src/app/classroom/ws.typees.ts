export interface Postions {
    x: number;
    y: number;
}

type Source = 'Teacher' | 'Student'

export interface CanvasData {
    currentPos: Postions;
    prevPos: Postions;
    source: Source;
}