package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.repository.HeyUserRepository;

@Service
public class HeyUService {

	@Autowired
	HeyUserRepository huRep;
	
	
	
	// Transform °DEC en Rad
	public double convertToRad(double angle) {
		return Math.PI*angle/180;  
		
	}
	
	
	
	public int calculateDistance(double latA, double longA, double latB, double longB) {
		
		// Transform °DEC en Rad
		double latARad = convertToRad(latA);
		double longARad =convertToRad(longA);
		double latBRad = convertToRad(latB);
		double longBRad =convertToRad(longB);
		
		//Latitude moyenne
		double latMoyRad=(latARad+latBRad)/2;

		
		
		//delta longitude
		double dlambda=longARad-longBRad;
		
		//Distance angulaire en radians
		double SAB=Math.acos(Math.sin(latARad)*Math.sin(latBRad)+Math.cos(latARad)*Math.cos(latBRad)*Math.cos(dlambda));
		
		
		// En WGS84  https://fr.wikipedia.org/wiki/WGS_84
		//https://geodesie.ign.fr/contenu/fichiers/Distance_longitude_latitude.pdf
		//demi grand axe
		double a = 6378137.0;
		
		//première excentricité (WGS84)
		double e =0.081819190842622;
		
		//main radii of curvature
		
//		double p=(a*(1-Math.pow(e, 2)))/Math.pow(((1-Math.pow(e, 2))*Math.pow(Math.sin(latMoyRad), 2)), (3/2));
//		double N =a/Math.sqrt(((1-Math.pow(e, 2))*Math.pow(Math.sin(latMoyRad), 2)));
//		
//		
////		double ee =(1-Math.pow(e, 2.0));
////		double sinLat= Math.sin(latMoyRad);
////		double sin2Lat=Math.pow(sinLat, 2);
////		double eesin2Lat =ee*sin2Lat;
////		
////		double p =(a*ee)/Math.pow((eesin2Lat), 1.5);
////		double N =a/Math.sqrt(eesin2Lat);
////		//Approximate radius
//		double radius= Math.sqrt(p*N);
//		
//		System.out.println("p="+p);
//		System.out.println("N="+N);
//		System.out.println("radius="+radius);
		
		double radius=a;
		
		
		double distance = SAB*radius;
//		double distance = SAB*6378137;

		
		System.out.println(distance);

		return (int) distance;
		
		
	}
	
	
	
	
	
}
