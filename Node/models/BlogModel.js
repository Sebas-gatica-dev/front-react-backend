import db from '../database/db.js';
//importamos Sequelize
import { DataTypes } from 'sequelize';

const BlogModel = db.define('blogs', {
    title: {type: DataTypes.STRING },
    content: {type: DataTypes.STRING},
},{
    timestamps:false,
})

export default BlogModel;