const windFromTheSea =
`Ветер с моря дул, ветер с моря дул
Нагонял беду, нагонял беду
И сказал ты мне, и сказал ты мне
Больше не приду, больше не приду

Видно не судьба, видно не судьба
Видно нет любви, видно нет любви
Видно надо мной, видно надо мной
Посмеялся ты, посмеялся ты

Я тебя люблю, я тебя люблю
Честно говорю, честно говорю
Ведь ты знаешь сам, ведь ты знаешь сам
Как тебя я жду, как тебя я жду

Видно не судьба, видно не судьба
Видно нет любви, видно нет любви
Видно надо мной, видно надо мной
Посмеялся ты, посмеялся ты`

let str = windFromTheSea.replace(/[,]/g, '').replace(/\n/g, ' ').toLowerCase();

let arr = str.split (' ');

let set = new Set (arr);

let map = new Map ();

set.forEach ((key, value) => {
  let i = 1;
  for (let a = 0; a < arr.length;a++) {
    if (value === arr[a]) {
      map.set(value, i++);
    };
  };
});

console.log (map);