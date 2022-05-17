import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import * as core from "./core-notes.mjs";

const yarg = yargs(hideBin(process.argv))

yarg.version('1.0.0')

yarg.command({
    command: 'list',
    describe: 'Lista le tue note',
    handler() {
        core.listNotes();
    }
})

yarg.command({
    command: 'add',
    describe: 'Aggiungi una nota',
    builder: {
        title: {
            describe: 'Titolo nota',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Corpo della nota',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        //console.log('Risultato', argv.title, argv.body);

        core.addNote(argv.title, argv.body);
    }
})

yarg.command({
    command: 'remove',
    describe: 'Rimuovi una nota',
    builder: {
        title: {
            describe: 'Titolo nota',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        //console.log('rimuovi una nota');

        core.removeNote(argv.title)
    }
})

yarg.command({
    command: 'read',
    describe: 'Leggi una nota',
    builder: {
        title: {
            describe: 'Titolo nota',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        //console.log('leggi una nota');
    
        core.readNote(argv.title);
    }
})

yarg.parse()