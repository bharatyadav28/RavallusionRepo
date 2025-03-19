"use client";


export const mapToObject = (map) => Object.fromEntries(map);
export const objectToMap = (obj) => new Map(Object.entries(obj));
