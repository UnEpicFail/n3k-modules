/**
 * Стаж
 */



export class Experience
{
    general: number; /*Общий стаж*/
    continuous: number; /*Непрерывный стаж*/
    pedagogical: number; /*Педагогический стаж*/
    administrative: number; /*Административный стаж*/
    methodological: number; /*Методический стаж*/
    organization: number; /*Стаж в учреждении*/
    service_record: number; /*Стаж по выслуге*/
    specialty: number; /*Стаж по специальности*/
    position: number; /*Стаж в должности*/

    constructor(json) {
        json = (json || {})
		this.general = json["general"] || null;
		this.continuous = json["continuous"] || null;
		this.pedagogical = json["pedagogical"] || null;
		this.administrative = json["administrative"] || null;
		this.methodological = json["methodological"] || null;
		this.organization = json["organization"] || null;
		this.service_record = json["service_record"] || null;
		this.specialty = json["specialty"] || null;
		this.position = json["position"] || null;
       
    }

    keys() {
        return Object.keys(this)
    }
}