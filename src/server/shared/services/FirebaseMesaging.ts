import firebaseAdmin from "../../../firebase";

const message = {
    notification: {
        title: 'Título da Notificação',
        body: 'Corpo da Notificação'
    },
    token: ''
};

firebaseAdmin.messaging().send(message)
    .then((response) => {
        console.log('Notificação enviada com sucesso:', response);
    })
    .catch((error) => {
        console.error('Erro ao enviar a notificação:', error);
    });