import express from 'express';
import { getMessages } from '../controller/messages';





const router=express.Router();

router.get('/',getMessages);

