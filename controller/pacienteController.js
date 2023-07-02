const express = require('express');
const pacienteModel = require('../model/pacienteModel');
const upload = require('../helpers/upload/upload');

const router = express.Router();

router.post('/paciente/inserir', upload.array('foto_paciente', 2), (req,res)=>{ 
    let { nome_paciente, telefone_paciente, celular_paciente, email_paciente} = req.body;


    let foto_paciente = req.files[0].path;

    pacienteModel.create({
        nome_paciente,
        telefone_paciente,
        celular_paciente,
        email_paciente,
        foto_paciente
       
        }).then(
        ()=>{
            return res.status(201).json({
                errorStatus:false,
                mensageStatus: 'PACIENTE CADASTRADO!'
            });
        }
    )
    .catch(
        (error)=>{
            return res.status(500).json({
                errorStatus:true,
                mensageStatus: error
            });
        }
    );
});

router.get('/paciente/selecionar', (req,res)=>{
    pacienteModel.findAll()
        .then(
            (paciente)=>{
                res.json(paciente);
            }
    )
    .catch(
        (error)=>{
            return res.status(500).json({
                 errorStatus:true,
                 mensageStatus: error
            });
         }
    );
});

router.put('/paciente/alterar', upload.array('foto_paciente', 2), (req,res)=>{

    let {nome_paciente, telefone_paciente, celular_paciente, email_paciente, id,} = req.body;
    let foto_paciente = req.files[0].path;

    pacienteModel.update(
        {
            nome_paciente,
            telefone_paciente,
            celular_paciente,
            email_paciente,
            foto_paciente
        },
        {
            where:{id}
        }
    ).then(
        ()=>{
            return res.status(201).json({
                errorStatus:false,
                mensageStatus: 'PACIENTE ALTERADO!'
            });
        }
    )
    .catch(
        (error)=>{
            return res.status(500).json({
                errorStatus:true,
                mensageStatus: error
            });
        }
    );

})

router.delete('/paciente/excluir/:id', (req,res)=>{
    let {id} = req.params;
    pacienteModel.destroy(
        {where:{id}}
    ).then(
        ()=>{
            return res.status(200).json({
                errorStatus:false,
                mensageStatus:'PACIENTE EXCLUIDO!'
            });
        }
    ).catch(
        (error)=>{
            return res.status(500).json({
                errorStatus:true,
                mensageStatus: error
            });
        }
    );
})

module.exports = router;