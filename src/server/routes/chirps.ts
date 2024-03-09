import { Router } from 'express'
import db from '../db';

const router = Router();

// GET /api/chirps/id
router.get('/:id', async (req,res) => {
    try {
        const id = parseInt(req.params.id, 10)
        const chirp = await db.chirps.getOneChirp(id)
        res.json(chirp)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Internal Server Error', error})
    }
});

//GET /api/chirps/
router.get('/', async (req,res) => {
    try {
        const chirps = await db.chirps.getALLChirps()
        res.json(chirps)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Internal Server Error', error})
    }
});

//POST /api/chirps/
router.post('/', async (req,res) => {
    try {
        const newChirp = req.body
        const chirpResult = await db.chirps.insertChirp(newChirp.body, newChirp.location)
        res.json({ message:'chirp created', id:chirpResult.insertId})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Internal Server Error', error})
    }
});

// router.put('/', async (req,res) => {
//     try {
        
//     } catch (error) {
//         console.log(error)
//         res.status(500).json({message: 'Internal Server Error', error})
//     }
// });

// router.delete('/', async (req,res) => {
//     try {
        
//     } catch (error) {
//         console.log(error)
//         res.status(500).json({message: 'Internal Server Error', error})
//     }
// });

export default router;