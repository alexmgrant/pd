import { AxiosResponse } from 'axios';
import { FormEvent } from 'react';

export const getData = (response: AxiosResponse<any>) => response.data;

export const getEventValue = (event: FormEvent<HTMLInputElement>): string =>
  (event.target as HTMLInputElement).value;
