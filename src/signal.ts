// A SUPER simple reactive signal in TS:
export class Signal<T> {
  private listeners = new Set<(value: T) => void>();
  constructor(private value: T) {}
  get() { return this.value; }
  set(newVal: T) {
    this.value = newVal;
    this.listeners.forEach(fn => fn(newVal));
  }
  subscribe(fn: (value: T) => void) {
    this.listeners.add(fn);
    // Optionally, emit initial value:
    fn(this.value);
    return () => this.listeners.delete(fn);
  }
}