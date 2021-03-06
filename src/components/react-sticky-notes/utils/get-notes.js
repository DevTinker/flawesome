import { getUUID } from './get-uuid';
export function getNotes(colorCodes, notes ) {
	let _notes = [];
	if(notes && notes.length > 0){
		_notes = notes.map((note)=>{
			note.id = note.id?note.id:getUUID();
			note.position = note.position?note.position:{ x: 0, y: 0 };
			note.color= note.color?note.color:colorCodes[Math.floor(Math.random() * colorCodes.length)];
			note.width = note.width ? note.width : 220;
			note.height = note.height ? note.height : 220 ;
			return note;
		});
	}else{
		_notes = [
			{
				id: getUUID(),
				text: '',
				position: { x: 0, y: 0 },
				color: colorCodes[Math.floor(Math.random() * colorCodes.length)],
				selected:true,
				width: 220,
				height: 220
			}
		]
	}
	return _notes;
}
