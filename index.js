class Coffee {
    constructor(obj = {}){
        this.bean = obj.bean,
        this.method = obj.method,
        this.category = obj.category
    }
}

class Teh{
    constructor(obj = {}){
        this.tehName = obj.tehName
    }
}

// Class Extend

class Cafe extends Coffee{
    constructor(obj = {}){
        super(obj)
        this.name = obj.name
    }
}

const detailCafe = new Cafe({
    bean: ['Gayo Red Honey', 'Sidikalang', {Robusta: 'Kapal Tanker'}],
    method: 'Drip',
    category: 'Arabica',
    name:'Sevendays',
    tehName : 'sariwangi'
})


class Location extends Cafe{
    constructor(obj= {}){
        super(obj)
        this.long = obj.long,
        this.lat = obj.lat
    }
}

const lokasiCafe = new Location({
    bean: ['Gayo Red Honey', 'Sidikalang', {Robusta: 'Kapal Tanker'}],
    method: 'Drip',
    category: 'Arabica',
    name:'Sevendays',
    long: 123414142,
    lat: -1231312
})

console.log(lokasiCafe);
