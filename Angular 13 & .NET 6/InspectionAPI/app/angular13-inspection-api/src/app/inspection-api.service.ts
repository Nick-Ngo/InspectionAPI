import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InspectionApiService {

  readonly inspectionApiUrl = "http://localhost:7283/api";
  constructor(private http: HttpClient) { }

  // Inspection
  getInspectionList(): Observable<any[]> {
    return this.http.get<any>(this.inspectionApiUrl + "/inspections");
  }
  addInspection(data: any) {
    return this.http.post<any>(this.inspectionApiUrl + "/inspections", data);
  }
  updateInspection(id: number | string, data: any) {
    return this.http.put<any>(this.inspectionApiUrl + `/inspections/${id}`, data);
  }
  deleteInspection(id: number | string) {
    return this.http.delete<any>(this.inspectionApiUrl + `/inspections/${id}`);
  }

  // Inspection Type
  getInspectionTypeList(): Observable<any[]> {
    return this.http.get<any>(this.inspectionApiUrl + "/inspectionTypes");
  }
  addInspectionType(data: any) {
    return this.http.post<any>(this.inspectionApiUrl + "/inspectionTypes", data);
  }
  updateInspectionType(id: number | string, data: any) {
    return this.http.put<any>(this.inspectionApiUrl + `/inspectionTypes/${id}`, data);
  }
  deleteInspectionType(id: number | string) {
    return this.http.delete<any>(this.inspectionApiUrl + `/inspectionTypes/${id}`);
  }

  // Status
  getStatusList(): Observable<any[]> {
    return this.http.get<any>(this.inspectionApiUrl + "/status");
  }
  addStatus(data: any) {
    return this.http.post<any>(this.inspectionApiUrl + "/status", data);
  }
  updateStatus(id: number | string, data: any) {
    return this.http.put<any>(this.inspectionApiUrl + `/status/${id}`, data);
  }
  deleteStatus(id: number | string) {
    return this.http.delete<any>(this.inspectionApiUrl + `/status/${id}`);
  }
}
