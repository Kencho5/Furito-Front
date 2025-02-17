export interface AddOrgFields {
  email: string;
  org_code: string;
  org_type: string;
  org_name: string;
  address: string;
  phone: string;
  phone_code: string;
}

export interface AddOrgResponse {
  presigned_url: string;
}

export interface GetOrgsResponse {
  presigned_url: string;
}
