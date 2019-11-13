package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.repository.HeyUserRepository;

@Service
public class HeyUService {

	@Autowired
	HeyUserRepository huRep;
	
	
	public void updateLocation() {
		
	}
	
	public void findNearUser() {
		
	}
	
	// Transform °DEC en Rad
	public double convertToRad(double angle) {
		return Math.PI*angle/180;  
		
	}
	
	
	
	public int calculateDistance(double latA, double longA, double latB, double longB) {

		// En WGS84  https://fr.wikipedia.org/wiki/WGS_84
		//https://geodesie.ign.fr/contenu/fichiers/Distance_longitude_latitude.pdf
		// cours-fad-public.ensg.eu/pluginfile.php/1507/mod_resource/content/1/geoell.pdf   ---- Page 24 à 27 -----
		
		
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
	
		
		//Demi grand axe (WGS84)
		double a = 6378137.0;
		
		//première excentricité (WGS84)
		double e =0.081819190842622;
		
		//main radii of curvature
		double p = a*(1-Math.pow(e, 2))/Math.pow((1-(Math.pow(e, 2)*Math.pow(Math.sin(latMoyRad), 2))), 1.5);
		double N =a/Math.sqrt(1-(Math.pow(e, 2)*Math.pow(Math.sin(latMoyRad), 2)));
		double radius= Math.sqrt(p*N);	
		
		
		double distance = SAB*radius;

		
		System.out.println("La distance séparant les deux heyUsers est de :  "+(int) distance+ " m");

		return (int) distance;
		
		
	}
	
	
	
	
	
}
