

export interface ScheduleApi {
    time24h : string;
    time12h : string;
    session : string;
    repeat_type: string;
    day_repeat : string;
    action: boolean;
    device_id: string;
    relays: string; 
}