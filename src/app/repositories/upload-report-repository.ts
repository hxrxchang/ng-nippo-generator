import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { makeDatePath } from '../domains/report-domain';
import { credentials } from 'credential';

@Injectable({
  providedIn: 'root',
})
export class UploadReportRepository {
  constructor(private http: HttpClient) {}

  postToEsa(markdown: string): Observable<any> {
    const esaPostBody = {
      post: {
        name: credentials.esaAuthorName,
        body_md: markdown,
        category: `日報/${makeDatePath()}`,
        wip: false,
      },
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${credentials.esaToken}`,
      }),
    };

    return this.http.post(`${credentials.esaApiEndPoint}/v1/teams/${credentials.esaTeamName}/posts`, esaPostBody, httpOptions);
  }

  postToSlack(markdown: string): Observable<any> {
    const arrangedMarkdown = '```\n\n' + markdown + '\n\n```';
    return this.http.post(credentials.slackWebHookUrl, { text: arrangedMarkdown }, { responseType: 'text' });
  }
}
