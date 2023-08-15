interface MyObject {
  id: number,
  name: string,
  birthDay: Date,
}

let user: MyObject = {
  id: 2214234,
  name: "Nobel",
  birthDay: new Date('20-03-1998')
};

interface OptionalObject {
  id: number,
  name: string,
  birthDay?: Date,
  status?: string,
}

let userOptional: OptionalObject = {
  id: 2214234,
  name: "Nobel",
};

// inheritence

interface address {
  addressline1: string,
  district: string,
  state?: string,
  pincode?: number
}

interface InheritedObject extends address {
  id: number,
  name: string,
  birthDay: Date,
}

let userWithAddress: InheritedObject = {
  id: 2214234,
  name: "Nobel",
  birthDay: new Date('20-03-1998'),
  addressline1: 'Address Line 1',
  district: 'district'
}

// type alias

type firstName = string;

let myFirstName: firstName = 'Nobel';

// enumeration

enum userStatus {
  Active = 'active',
  InActive = 'in-active',
  Blocked = 'blocked'
}

let enumObject: OptionalObject = {
  id: 2214234,
  name: "Nobel",
  status: userStatus.Active,
}

// functional typing

interface userData {
  id: number,
  name: string,
  clone(): userData,
}

// function clone(source: userData): userData {
//   return source;
// }

function clone<T>(source: T): T {
  return source;
}

const user1: userData = { id: 123, name: "Nobel", clone: () => user1 };
const user2 = clone(user1)

const dateRange = { startDate: Date.now(), endDate: Date.now() };
const dateClone = clone(dateRange);

// Type union

type objectUnion = MyObject & address;

// keyof

type objectKeys = keyof objectUnion;

let searchableObject: objectUnion = {
  id: 2214234,
  name: "Nobel",
  birthDay: new Date('20-03-1998'),
  addressline1: 'Address Line 1',
  district: 'district'
}

const getValues = <T>(object: T, propName: keyof T) => {
  return object[propName];
}

let value = getValues(searchableObject, 'name');

// Indexed type checking

type district = objectUnion["id"];

// Record

let record: Record<string, string | number> = { name: "Nobel" };
record.id = 11123;

// PICK, OMIT, PARTIAL, REQUIRE