import { Router } from 'express';
import HeroModel from './heroModel.js';

const router = Router();

router.get('/get-heroes', async (req, res) => {
  try {
    const heroes = await HeroModel.find({})
    res.json(heroes);
  } catch (e) {
    console.log(e)
    res.status(500)
    res.json('Ошибка сервера')
  }
})

router.post('/set-hero', async (req, res) => {
  try {
    const { body } = req;
    const hero = await HeroModel.create(body)
    res.json(hero);
  } catch (e) {
    console.log(e)
    res.status(500)
    res.json('Ошибка сервера')
  }
})

router.get('/get-hero-by-id', async (req, res) => {
  try {
    const { id } = req.query
    // const id = req.query.id
    const hero = await HeroModel.find({ _id: id })
    res.json(hero);
  } catch (e) {
    console.log(e)
    res.status(500)
    res.json('Ошибка сервера')
  }
})

router.delete('/delete-hero', async (req, res) => {
  try {
    const { id } = req.query
    const hero = await HeroModel.remove({ _id: id })
    res.json(hero);
  } catch (e) {
    console.log(e)
    res.status(500)
    res.json('Ошибка сервера')
  }
})

router.put('/edit-hero', async (req, res) => {
  try {
    const { body } = req
    const hero = await HeroModel.updateOne({ _id: body.id }, { $set: body.editedField })
    res.json(hero);
  } catch (e) {
    console.log(e)
    res.status(500)
    res.json('Ошибка сервера')
  }
})

router.get('/get-image-for-hero', async (req, res) => {
  try {
    const heroes = await HeroModel.find({})
    res.json(heroes);
  } catch (e) {
    console.log(e)
    res.status(500)
    res.json('Ошибка сервера')
  }
})

router.post('/set-image-for-hero', async (req, res) => {
  try {
   console.log(req.files)
  } catch (e) {
    console.log(e)
    res.status(500)
    res.json('Ошибка сервера')
  }
})

export default router;