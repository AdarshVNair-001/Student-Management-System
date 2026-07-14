import { Component } from '@angular/core';
import { StudentServices } from '../../services/student.services';
import { IStudentModel } from '../../model/student.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-getstd',
  imports: [FormsModule, CommonModule],
  templateUrl: './getstd.html',
  styleUrls: ['./getstd.css'],
  standalone: true
})
export class GetStd
{
  public lstStudents: IStudentModel[] = [];

  public iSearchId: number = 0;

  constructor(
    private m_studentServices: StudentServices
  ) {}

  public GetAllStudents(): void
  {
    this.m_studentServices.getStudents().subscribe({
      next: (lstData: IStudentModel[]) =>
      {
        console.log('DATA RECEIVED');
        console.log(lstData);

        this.lstStudents = lstData;
      },

      error: (objError: unknown) =>
      {
        console.log('ERROR - HTTP Error');
        console.error(objError);

        this.lstStudents = [];

        alert('Failed to fetch students');
      }
    });
  }

  public SearchStudentById(): void
  {
    this.m_studentServices.getStudentById(this.iSearchId).subscribe({
      next: (objResponse: any) =>
      {
        console.log('Student found');
        console.log(objResponse);

        if (!objResponse)
        {
          this.lstStudents = [];

          alert('Student not found');
          return;
        }

        const objStudent: IStudentModel =
          Array.isArray(objResponse)
            ? objResponse[0]
            : objResponse;

        if (!objStudent)
        {
          this.lstStudents = [];

          alert('Student not found');
          return;
        }

        this.lstStudents = [objStudent];
      },

      error: (objError: unknown) =>
      {
        console.log('ERROR - HTTP Error');
        console.error(objError);

        this.lstStudents = [];

        alert('Student not found');
      }
    });
  }
}