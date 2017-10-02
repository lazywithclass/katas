(define machine
  (lambda (S)
    (execute (regexp-split " " S) '())))
;; http://docs.racket-lang.org/reference/match.html#%28form._%28%28lib._racket%2Fmatch..rkt%29._match%29%29
(define execute
  (lambda (commands stack)

    (print commands)

    (cond
      ((null? commands) (car stack))
      [else (match (car commands)
              ["POP" (car stack)]
              )])
    ))
