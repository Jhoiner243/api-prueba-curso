import {type Request, type Response} from 'express'
import * as validator from 'validator'  
import bcrypt from 'bcrypt'
import { db } from '../../prisma/index'

interface User {
    name: string,
    email: string,
    password: string
}

export const POSTLogin= async (req:Request, res:Response): Promise<void> =>{

   try{
    
    const { email: email, password: password }: User = req.body

    //validar el formato email
    if (!validator.isEmail(email)) {
        res.status(400).json({message: 'Invalid email'})
        return;
    }
    //buscamos el usuario en la base de datos
    const validUser = await db.user.findUnique({where: {email}, select: {password: true}
    })

    //si el usuario no existe retornamos un error
    if (!validUser) {
        res.status(400).json({message: 'User not found'})
        return;
    }

    //Verificamos que la constraseña sea correcta 
    const validPassword = await bcrypt.compare(password, validUser.password)

    //retornamos un error si la contraseña no es correcta
    if (!validPassword) {
        res.status(400).json({message: 'Invalid password'})
        return;
    }

    res.status(200).json({message: 'Login successful'})
}catch(error){
    res.status(500).json({message: 'Internal server error'})
}

}
