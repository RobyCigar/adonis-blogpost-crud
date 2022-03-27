// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class UsersController {
    public async index({ request, response }: HttpContextContract) {
        console.log(request)
        return response.json({
            message: "Hello World"
        });
    }
}
