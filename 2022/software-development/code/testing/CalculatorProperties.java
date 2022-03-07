package demo;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;
import net.jqwik.api.*;
import net.jqwik.api.constraints.IntRange;

class DemoTest {
	// This does not work because of integer overflow!
	@Property
	boolean absoluteValueOfAllNumbersIsPositiveFail
			(@ForAll int anInteger) {
		return Math.abs(anInteger) >= 0;
	}
	
	// If we restrict range to -100..100, it works as expected
	@Property
	boolean absoluteValueOfAllNumbersIsPositive
			(@ForAll @IntRange(min=-100,max=100) int anInteger) {
		return Math.abs(anInteger) >= 0;
	}

	// A basic property we can check about the calculator class
	@Property
	boolean averageIsOrderIndependent
			(@ForAll int n1, @ForAll int n2) {
		Calculator c1 = new Calculator();
		Calculator c2 = new Calculator();
		c1.add(n1);
		c1.add(n2);
		c2.add(n2);
		c2.add(n1);
		return c1.getAverage() == c2.getAverage();
	}
	
}
