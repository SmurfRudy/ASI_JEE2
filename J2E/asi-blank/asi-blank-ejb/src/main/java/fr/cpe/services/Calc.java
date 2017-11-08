package fr.cpe.services;

import java.util.List;

public class Calc implements ICalc {

	@Override
	public Integer add(List<Integer> numbers) {
		int sum = 0;
		for (Integer number : numbers) {
			sum += number;
		}
		return sum;
	}

}
