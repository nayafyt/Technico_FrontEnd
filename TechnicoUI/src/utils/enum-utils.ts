import { PropertyType, RepairType, StatusType, UserType } from "../enums/enums";


export function statusTypeToString(status: StatusType): string {
    switch (status) {
      case StatusType.Pending: return 'pending';
      case StatusType.InProgress: return 'in progress';
      case StatusType.Completed: return 'completed';
      case StatusType.Declined: return 'declined';
      default: return 'unknown';
    }
  }
  
  export function repairTypeToString(repairType: RepairType): string {
    switch (repairType) {
      case RepairType.Painting: return 'painting';
      case RepairType.Insulation: return 'insulation';
      case RepairType.Frames: return 'frames';
      case RepairType.Plumbing: return 'plumbing';
      case RepairType.ElectricalWork: return 'electrical work';
      default: return 'unknown';
    }
  }

  export function propertyTypeToString(propertyType: PropertyType): string {
    switch (propertyType) {
      case PropertyType.Detached: return 'detached';
      case PropertyType.Maisonet: return 'maisonet';
      case PropertyType.Apartment: return 'apartment';
      default: return 'unknown';
    }
  }

  // export function userTypeToString(userType: UserType): string {
  //   switch (userType) {
  //     case UserType.User: return 'user';
  //     case UserType.Admin: return 'admin';
  //     default: return 'unknown';
  //   }
  // }
  
  export function stringToStatusType(status: string): StatusType {
    switch (status) {
      case 'in progress': return StatusType.InProgress;
      case 'pending': return StatusType.Pending;
      case 'completed': return StatusType.Completed;
      case 'declined': return StatusType.Declined;
      default: throw new Error(`Unknown status: ${status}`);
    }
  }
  
  export function stringToRepairType(repairType: string): RepairType {
    switch (repairType) {
      case 'painting': return RepairType.Painting;
      case 'insulation': return RepairType.Insulation;
      case 'frames': return RepairType.Frames;
      case 'plumbing': return RepairType.Plumbing;
      case 'electrical work': return RepairType.ElectricalWork;
      default: throw new Error(`Unknown user type: ${repairType}`);
    }
  }

  export function stringToPropertyType(propertyType: string): PropertyType {
    switch (propertyType) {
      case 'detached': return PropertyType.Detached;
      case 'maisonet': return PropertyType.Maisonet;
      case 'apartment': return PropertyType.Apartment;
      default: throw new Error(`Unknown status: ${propertyType}`);
    }
  }

  // export function stringToUserType(userType: string): UserType {
  //   switch (userType) {
  //     case 'in progress': return UserType.User;
  //     case 'pending': return UserType.Admin;
  //     default: throw new Error(`Unknown status: ${userType}`);
  //   }
  // }