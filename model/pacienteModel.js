const sequelize  = require('sequelize');

const connection = require('../database/database');

const paciente = connection.define(
    'tbl_paciente',
    {
        nome_paciente:{
            type: sequelize.STRING(500),
            allowNull:false
        },
        telefone_paciente:{
            type: sequelize.STRING(500),
            allowNull:false
        },
        celular_paciente:{
            type: sequelize.STRING(500),
            allowNull:false
        },
        email_paciente:{
            type: sequelize.STRING(500),
            allowNull:false
        },
        foto_paciente:{
            type: sequelize.STRING(500),
            allowNull:false
        },
    }

);

//paciente.sync({force:true});


module.exports = paciente; 