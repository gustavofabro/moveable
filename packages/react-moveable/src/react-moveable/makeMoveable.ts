import { Able } from "./types";
import { InitialMoveable } from "./InitialMoveable";

export function makeMoveable<T = {}>(ables: Array<Able<T>>) {
    return class Moveable extends InitialMoveable<T> {
        public static defaultAbles = ables;
    };
}
