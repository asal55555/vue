
let id = 1;
const app = {
    data() {
        return {
            game: '',
            title: 'Выберите категорию',
            text: '',
            // list: [
            
            //     { name: 'Zafar' },
            //     { name: 'Css' },
            //     { name: 'Js' },
            // ],
            // test: [
            //    {game: 'csgo'} ,'dota', 'pubg'
            // ],
            csgo: [
                { name: 'Zafar' },
                { name: 'Irina' },
                { name: 'Amir' },
            ],
            dota: [
                { name: 'Izzat' },
                { name: 'Timur' },
            ],
            pubg: [
                { name: 'Maksim' },
                { name: 'liza' },
            ]

        }

    },
    computed: {
        getListLength() {
            return this.csgo.length
        }
    },
    methods: {
        delNote(note) {
           this.list = this.list.filter(item => item.id != note.id) 
        },
        addNote() {
            if(this.text.length > 1) {
                this.list.push({
                    id: id++,
                    name: this.text
                })
                this.text = ''
            }
        },
        addGamer() {
            if (this.game == 'csgo') {
                this.csgo.push({ name: this.text })
                
            } else if (this.game == 'dota') {
                this.dota.push({ name: this.text })
            } else {
                this.pubg.push({ name: this.text })

            }
            
            this.text = ''
        }
        
    },
}

Vue.createApp(app).mount('#app')


