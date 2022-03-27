import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { PostFactory } from 'Database/factories/PostFactory'

export default class PostSeeder extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await PostFactory.createMany(10)
  }
}
