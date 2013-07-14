var atmega328 = {
	
	/** Program counter */
	PC: 0,

	sreg: {
		/** Global interrupt enable */
		'I': false,
		/** Bit Copy Storage */
		'T': false,
		/** Half Carry Flag */
		'H': false,
		/** Sign Bit */
		'S': false,
		/** Two's Complement Overflow Flag */
		'V': false,
		/** Negative Flag */
		'N': false,
		/* Zero flag */
		'Z': false,
		/** CaRry flag */
		'C': false
	},

	reg: {
		/*          MSB                                                                   LSB */
		'r0':  [7: false, 6: false, 5: false, 4: false, 3: false, 2: false, 1: false, 0: false],
		'r1':  [7: false, 6: false, 5: false, 4: false, 3: false, 2: false, 1: false, 0: false],
		'r2':  [7: false, 6: false, 5: false, 4: false, 3: false, 2: false, 1: false, 0: false],
		'r3':  [7: false, 6: false, 5: false, 4: false, 3: false, 2: false, 1: false, 0: false],
		'r4':  [7: false, 6: false, 5: false, 4: false, 3: false, 2: false, 1: false, 0: false],
		'r5':  [7: false, 6: false, 5: false, 4: false, 3: false, 2: false, 1: false, 0: false],
		'r6':  [7: false, 6: false, 5: false, 4: false, 3: false, 2: false, 1: false, 0: false],
		'r7':  [7: false, 6: false, 5: false, 4: false, 3: false, 2: false, 1: false, 0: false],
		'r8':  [7: false, 6: false, 5: false, 4: false, 3: false, 2: false, 1: false, 0: false],
		'r9':  [7: false, 6: false, 5: false, 4: false, 3: false, 2: false, 1: false, 0: false],
		'r10': [7: false, 6: false, 5: false, 4: false, 3: false, 2: false, 1: false, 0: false],
		'r11': [7: false, 6: false, 5: false, 4: false, 3: false, 2: false, 1: false, 0: false],
		'r12': [7: false, 6: false, 5: false, 4: false, 3: false, 2: false, 1: false, 0: false],
		'r13': [7: false, 6: false, 5: false, 4: false, 3: false, 2: false, 1: false, 0: false],
		'r14': [7: false, 6: false, 5: false, 4: false, 3: false, 2: false, 1: false, 0: false],
		'r15': [7: false, 6: false, 5: false, 4: false, 3: false, 2: false, 1: false, 0: false],
		/*          MSB                                                                   LSB */
		'r16': [7: false, 6: false, 5: false, 4: false, 3: false, 2: false, 1: false, 0: false],
		'r17': [7: false, 6: false, 5: false, 4: false, 3: false, 2: false, 1: false, 0: false],
		'r18': [7: false, 6: false, 5: false, 4: false, 3: false, 2: false, 1: false, 0: false],
		'r19': [7: false, 6: false, 5: false, 4: false, 3: false, 2: false, 1: false, 0: false],
		'r18': [7: false, 6: false, 5: false, 4: false, 3: false, 2: false, 1: false, 0: false],
		'r19': [7: false, 6: false, 5: false, 4: false, 3: false, 2: false, 1: false, 0: false],
		'r20': [7: false, 6: false, 5: false, 4: false, 3: false, 2: false, 1: false, 0: false],
		'r21': [7: false, 6: false, 5: false, 4: false, 3: false, 2: false, 1: false, 0: false],
		'r22': [7: false, 6: false, 5: false, 4: false, 3: false, 2: false, 1: false, 0: false],
		'r23': [7: false, 6: false, 5: false, 4: false, 3: false, 2: false, 1: false, 0: false],
		'r24': [7: false, 6: false, 5: false, 4: false, 3: false, 2: false, 1: false, 0: false],
		'r25': [7: false, 6: false, 5: false, 4: false, 3: false, 2: false, 1: false, 0: false],
		'r26': [7: false, 6: false, 5: false, 4: false, 3: false, 2: false, 1: false, 0: false],
		'r27': [7: false, 6: false, 5: false, 4: false, 3: false, 2: false, 1: false, 0: false],
		'r28': [7: false, 6: false, 5: false, 4: false, 3: false, 2: false, 1: false, 0: false],
		'r29': [7: false, 6: false, 5: false, 4: false, 3: false, 2: false, 1: false, 0: false],
		'r30': [7: false, 6: false, 5: false, 4: false, 3: false, 2: false, 1: false, 0: false],
		'r31': [7: false, 6: false, 5: false, 4: false, 3: false, 2: false, 1: false, 0: false]
	},
			
	memory: [],



	/**
	 * Performs the logical AND between the contents of register Rd and register Rr 
	 * and places the result in the destination register Rd.
	 *
	 * @param _Rd    Destination register
	 * @param _Rr
	 */
	'and': function(_Rd, _Rr) {

		var Rd = this.reg[_Rd];
		var Rr = this.reg[_Rr];

		/* Operation: Rd <- Rd && Rr */
		Rd[0] = Rd[0] && Rr[0];
		Rd[1] = Rd[1] && Rr[1];
		Rd[2] = Rd[2] && Rr[2];
		Rd[3] = Rd[3] && Rr[3];
		Rd[4] = Rd[4] && Rr[4];
		Rd[5] = Rd[5] && Rd[5];
		Rd[6] = Rd[6] && Rd[6];
		Rd[7] = Rd[7] && Rd[7]; 

		/* @TODO */
		this.sreg['S'];

		/* Cleared */
		this.sreg['V'] = false;

		/* Set if MSB of the result is set; cleared otherwise. */
		this.sreg['N'] = Rd[7];
 
		/* Set if the result is $00; cleared otherwise. */
		this.sreg['Z'] = !Rd[7] && !Rd[6] && !Rd[5] && !Rd[4] && !Rd[3] && !Rd[2] && !Rd[1] && !Rd[0];

		/* Program counter */
		this.PC++;


		this.reg[_Rd] = Rd; 
	},

	

	/**
	 * Performs the logical EOR between the contents of register Rd and register Rr
	 * and places the result in the destination register Rd.
	 *
	 * @param _Rd
	 * @param _Rr
	 */
	 'eor': function() {

		var Rd = this.reg[_Rd];
		var Rr = this.reg[_Rr];

		/* Operation: Rd <- Rd || Rr */
		Rd[0] = Rd[0] != Rr[0];
		Rd[1] = Rd[1] != Rr[1];
		Rd[2] = Rd[2] != Rr[2];
		Rd[3] = Rd[3] != Rr[3];
		Rd[4] = Rd[4] != Rr[4];
		Rd[5] = Rd[5] != Rd[5];
		Rd[6] = Rd[6] != Rd[6];
		Rd[7] = Rd[7] != Rd[7]; 

		/* @TODO */
		this.sreg['S'];

		/* Cleared */
		this.sreg['V'] = false;

		/* Set if MSB of the result is set; cleared otherwise. */
		this.sreg['N'] = Rd[7];
 
		/* Set if the result is $00; cleared otherwise. */
		this.sreg['Z'] = !Rd[7] && !Rd[6] && !Rd[5] && !Rd[4] && !Rd[3] && !Rd[2] && !Rd[1] && !Rd[0];

		/* Program counter */
		this.PC++;


		this.reg[_Rd] = Rd; 
	 },



	/**
	 * This instruction performs a single cycle No Operation.
	 */
	'nop': function() {

		this.PC++;
	},



	/**
	 * Performs the logical OR between the contents of register Rd and register Rr 
	 * and places the result in the destination register Rd.
	 *
	 * @param _Rd
	 * @param _Rr
	 */
	 'or': function() {

		var Rd = this.reg[_Rd];
		var Rr = this.reg[_Rr];

		/* Operation: Rd <- Rd || Rr */
		Rd[0] = Rd[0] || Rr[0];
		Rd[1] = Rd[1] || Rr[1];
		Rd[2] = Rd[2] || Rr[2];
		Rd[3] = Rd[3] || Rr[3];
		Rd[4] = Rd[4] || Rr[4];
		Rd[5] = Rd[5] || Rd[5];
		Rd[6] = Rd[6] || Rd[6];
		Rd[7] = Rd[7] || Rd[7]; 

		/* @TODO */
		this.sreg['S'];

		/* Cleared */
		this.sreg['V'] = false;

		/* Set if MSB of the result is set; cleared otherwise. */
		this.sreg['N'] = Rd[7];
 
		/* Set if the result is $00; cleared otherwise. */
		this.sreg['Z'] = !Rd[7] && !Rd[6] && !Rd[5] && !Rd[4] && !Rd[3] && !Rd[2] && !Rd[1] && !Rd[0];

		/* Program counter */
		this.PC++;


		this.reg[_Rd] = Rd; 
	 }
};