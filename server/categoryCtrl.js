module.exports = {
    getPs4: (req, res) => {
        const db = req.app.get('db')
        db.get_ps4().then(response => {
         res.status(200).send(response)
        }).catch(err => {
console.log(err)
        })
    },
    getPs3: (req, res) => {
        const db = req.app.get('db')
        db.get_ps3().then(response => {
         res.status(200).send(response)
        }).catch(err => {
console.log(err)
        })
    },
    getPsVita: (req, res) => {
        const db = req.app.get('db')
        db.get_vita().then(response => {
         res.status(200).send(response)
        }).catch(err => {
console.log(err)
        })
    },
    getPsP: (req, res) => {
        const db = req.app.get('db')
        db.get_psp().then(response => {
         res.status(200).send(response)
        }).catch(err => {
console.log(err)
        })
    },
    getSwitch: (req, res) => {
        const db = req.app.get('db')
        db.get_switch().then(response => {
         res.status(200).send(response)
        }).catch(err => {
console.log(err)
        })
    },
    getInterviews: (req, res) => {
        const db = req.app.get('db')
        db.get_interviews().then(response => {
         res.status(200).send(response)
        }).catch(err => {
console.log(err)
        })
    },
    getiOS: (req, res) => {
        const db = req.app.get('db')
        db.get_ios().then(response => {
         res.status(200).send(response)
        }).catch(err => {
console.log(err)
        })
    },
    get360: (req, res) => {
        const db = req.app.get('db')
        db.get_x360().then(response => {
            console.log('360', response)
            res.status(200).send(response)

        }).catch(err => {
console.log(err)
        })
    },
    getxOne: (req, res) => {
        const db = req.app.get('db')
        db.get_xone().then(response => {
         res.status(200).send(response)
        }).catch(err => {
console.log(err)
        })
    }
}