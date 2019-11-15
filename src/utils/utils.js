

export function containsErrorOnField(errors, field){
	return (errors.errors.map((error) =>  error.field)).indexOf(field) >= 0
}


export function passwordsMatchError(errors){
	return (errors.errors.map((error) =>  error.code)).indexOf("MatchPasswords") >= 0
}


