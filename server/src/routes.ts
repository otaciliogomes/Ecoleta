import express from 'express';

import multer from 'multer';
import multerConfig from './config/multer';
import { celebrate, Joi } from 'celebrate';

import PointsCrontroller from './controllers/PointsCrontroller';
import ItemsCrontoller from './controllers/ItemsController';

// index, show, create, update, delete
const routes = express.Router();
const upload = multer(multerConfig);

const pointsCrontroller = new PointsCrontroller();
const itemsCrontoller = new ItemsCrontoller();


routes.get('/items', itemsCrontoller.index);
routes.get('/points', pointsCrontroller.index);
routes.get('/points/:id', pointsCrontroller.show);

routes.post('/points', 
    upload.single('image'),
   celebrate({
    body: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.number().required(),
        latitude: Joi.number().required(),
        longitude: Joi.number().required(),
        city: Joi.string().required(),
        uf: Joi.string().required().max(2),
        items: Joi.string().required(),
    })
   },{
       abortEarly:false
   }),
    pointsCrontroller.create
);



export default routes;