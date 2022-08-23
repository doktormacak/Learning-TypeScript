

function simpleState<T>(initial: T): [() => T, (v: T) => void] {
  let val: T = initial;
  return [
    () => val,
    (v: T) => {
      val = v;
    }
  ]
}

const [val1getter, val1setter] = simpleState(63);
console.log(val1getter());
val1setter(42);
console.log(val1getter());

const [val2getter, val2setter] = simpleState<string | null> (null);
console.log(val2getter());
val2setter('andrija');
console.log(val2getter());

function ranker<RankItem>(
  items: RankItem[],
  rank: (v: RankItem) => number
): RankItem[] {
  interface Rank {
    item: RankItem;
    rank: number;
  }

  const ranks : Rank[] = items.map((item) => ({
    item,
    rank: rank(item),
  }));

  ranks.sort((a, b) => a.rank - b.rank);
  return ranks.map((rank) => rank.item);
}

interface Pokemon {
  name: string;
  hp: number;
}

const pokemons : Pokemon[] = [
  {
    name: 'Pikachu',
    hp: 5,
  },
  {
    name: 'Raychu',
    hp: 7,
  },
  {
    name: 'chu',
    hp: 2
  }
]

const ranks = ranker(pokemons, ({hp}) => hp);
console.log(ranks)