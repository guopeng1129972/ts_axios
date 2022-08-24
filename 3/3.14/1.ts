class Animal {
  public name: string
  public constructor(name: string) {
    this.name = name
  }
  public move(distance: number = 0) {
    console.log(`${this.name} moved ${distance}m`)
  }
}
