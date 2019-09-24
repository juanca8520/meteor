import './main.html'
import Eventos from '../collections';

Template.evento.events({
    'submit form': (event) => {
        event.preventDefault();

        const target = event.target;
        const name = target.name.value;
        const desc = target.description.value;
        const responsible = target.responsible.value;
        const fechaInicio = target.fechaInicio.value;
        const fechaFin = target.fechaFin.value;
        const ubicacion = target.ubicacion.value;

        const evento = {
            target: target,
            name: name,
            desc: desc,
            responsible: responsible,
            fechaInicio: fechaInicio,
            fechaFin: fechaFin,
            ubicacion: ubicacion
        }

        Eventos.insert(evento);

    }
})

Template.evento.helpers({
    eventosCollection: () => {
        return Eventos.find({});
    }
})