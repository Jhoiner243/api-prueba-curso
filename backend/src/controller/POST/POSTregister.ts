import {type Request, type Response} from 'express'
import * as validator from 'validator'
import bcrypt from 'bcrypt'
import { db } from '../../prisma/index'

interface User {
    name: string,
    email: string,
    password: string
}

export const POSTregister = async (req: Request, res: Response): Promise<void> => {

    const {name, email, password}: User = req.body

    // Validamos que todos los campos esten presentes
    if (!name || !email || !password) {
       res.status(400).json({message: 'Missing fields'})
       return;
    }
    //Validamos que todos los campos esten presentes
    if (!name || !email || !password) {
        res.status(400).json({ message: 'Missing fields' })
        return
    }
    
    // Validamos que el email sea válido
    if (!validator.isEmail(email)) {
       res.status(400).json({message: 'Invalid email'})
       return;
    }

    // Validamos que la contraseña sea segura
    if (!validator.isLength(password, {min: 8, max: 20})) {
         res.status(400).json({message: 'Invalid password'})
         return;
    }

    //Verificamos que el usuario no existe en la base de datos 
    const emailExiste = await db.user.findUnique({where: {email}})
    if (emailExiste) {
        res.status(400).json({message: 'Email already exists'})
        return;
    }
    //Validamos que la contraseña tenga una longitud de al menos 8 caracteres
    if (!validator.isLength(password, {min: 8})){
        res.status(400).json({message: 'Invalid password'})
        return;
    }

    //Encriptamos la contraseña
    const hashedPassword = await bcrypt.hash(password, 10)
    
    //Creamos el usuario
    const user = await db.user.create({
        data: {
            name,
            email,
            password: hashedPassword
        }
    })

    res.status(201).json({message: 'User created successfully'})

}