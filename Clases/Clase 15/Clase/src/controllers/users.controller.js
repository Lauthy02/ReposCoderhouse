import { UserNotFoudError } from '../services/users-not-found-error.js';
import {usersService} from '../services/users.service.js'

class UsersController {
    FindAllUsers = async (req, res) => {
        try {
            const result = await usersService.finAll(); 
            res.status(200).json({users: result})
        } catch (error) {
            res.status(500).json({message: error.message})
        }  
    }

    FindUserById = async (req, res) => {
        const {id} = req.params.id;
        try {
            const result = await usersService.finById(+id); 
            res.status(200).json({user: result})
        } catch (error) {
            if (error instanceof UserNotFoudError) {
                return res.status(404).json({message: error.message})
            }
            res.status(500).json({message: error.message})
        }  
    }   

    CreateUser = async (req, res) => {
        try {
            const result = await usersService.creOne(req.body)
            res.status(201).json({user: result})
        } catch (error) {
            res.status(500).json({message: error.message})
        }  
    }
}

export const usersController = new UsersController()