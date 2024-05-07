import firebaseAdmin from "../../../firebase";



export const EnviarMensagemFirebase = async (title: string, body: string, deviceToken: string) => {


    const message = {
        notification: {
            title: title,
            body: body
        },
        token: deviceToken
    };

    firebaseAdmin.messaging().send(message)
        // .then((response) => {
        //     console.log('Notificação enviada com sucesso:', response);
        // })
        // .catch((error) => {
        //     console.error('Erro ao enviar a notificação:', error);
        // });
}