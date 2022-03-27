import Factory from '@ioc:Adonis/Lucid/Factory'
import Post from 'App/Models/Post'

export const PostFactory = Factory
    .define(Post, ({ faker }) => {
        return {
            title: faker.name.title(),
            content: faker.lorem.paragraph(),
        }
    })
    .build();

