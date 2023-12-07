// console.log('Hello klassen!')

// var;
let y = 10
const x = 5

y = 15
// x = 15


const stringValue = 'jag är en string'
const numberValue = 11738423093247902398234098234.349723982374
const boolValue = true // false

const undefinedValue = undefined
const nullValue = null

const NaNValue = NaN

// console.log(typeof NaNValue)

const arrayValue = [1, 'ett mening', true, false, null, undefined, NaN, {}, ['äpple', 'päron']]

arrayValue.push('123') //lägger till nytt värde i slutet på array
arrayValue.unshift('321') //lägger till nytt värde i början på array

arrayValue.shift() //tar  bort första värdet i arrayen
arrayValue.pop() //tar bort sista värdet i arrayen

arrayValue.forEach(function(value) {

}
)

const mapValue = new Map()

mapValue.set(true, 44)
mapValue.set("häst", 56)
mapValue.get('myKey')
mapValue.delete('myKey')

// console.log(mapValue.keys())

const setValue = new Set()
setValue.add(123)
// setValue.delete(123)
setValue.entries

const objectValue = {
    name: 'Jesper',
    age: 33,
    lastName: 'Sjöström',
    favoriteFruits: ['äpple', 'banan', 'kiwi'],
    homes: {
        adress: '',
        zipcode: 23872
    },
    run: (value) => {
        // console.log('Springer så himla', value)
    }
}

objectValue.name
objectValue.run('långsamt')

for(let i = 0 ; i < 100 ; i++) {
    objectValue.favoriteFruits[i]
}

for(let data of objectValue.favoriteFruits) {

}



// använd alltid "for in"-loopar när vi jobbar med objekt
for(let objValue in objectValue) {
    // console.log(objValue + ": " +  objectValue[objValue]   )
}

objectValue.favoriteFruits.forEach(() => {

})

Object.keys(objectValue)




const button = document.querySelector('.btn')

button.addEventListener('mouseenter', () => {
    console.log('du hovrar över knappen!')
})

button.addEventListener('mouseleave', () => {
    console.log('du slutade hovra över knappen')
})