type Runner = {
  kind: 'runner';
  name: string;
  run: () => void;
}

type Swimmer = {
  kind: 'swimmer';
  name: string;
  swim: () => void;
}

type Athlete = Runner | Swimmer;

const main = (person: Athlete) => {
    // person.swim() // ❌ Erro: A Propriedade 'swim' não existe no tipo Runner

    switch (person.kind) { // ✅
      case 'runner':
        person.run() //Tipo Runner                                            
        break

      case 'swimmer':
        person.swim() //Tipo Swimmer
        break

      default:
        person //Tipo Never
    }
}