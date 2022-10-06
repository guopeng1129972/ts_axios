class BeeKeeper {
  hasMask: boolean
}

class LionKepper {
  nameTag: string
}

class Animal {
  numLength: number
}

class Bee extends Animal {
  keeper: BeeKeeper
}

class Lion extends Animal {
  keeper: LionKepper
}

function createInstance<T extends Animal>(c: new () => T): T {
  return new c()
}
//可以访问 keeper 和 nameTag
createInstance(Lion).keeper.nameTag
createInstance(Bee).keeper
// createInstance(Animal).numLength
